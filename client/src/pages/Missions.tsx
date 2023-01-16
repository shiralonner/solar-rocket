import { SyntheticEvent, useEffect, useState } from "react";
import { AppLayout } from "../layouts/AppLayout";
import fetchGraphQL from "../graphql/GraphQL";
import { Mission } from "../graphql/schema";
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Button,
  Grid,
  Typography,
  Fab,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Toolbar,
  Container,
  IconButton,
  Tooltip,
  Snackbar,
  Alert,
  Box,
  CircularProgress,
} from "@mui/material";

import {
  Add as AddIcon,
  FilterAlt as FilterAltIcon,
  Sort as SortIcon,
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
} from "@mui/icons-material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { ListMenu } from "../components/ListMenu";

type SortField = "Title" | "Date"| "Operator";

interface MissionsResponse {
  data: {
    Missions: Mission[];
  };
}

const getMissions = async (
  sortField: SortField,
  sortDesc: Boolean
): Promise<MissionsResponse> => {
  return await fetchGraphQL(
    `
  {
    Missions(
     
      sort:{
            field: ${sortField}
             desc:${sortDesc}
          }
    ) {
      id
      title
      operator
      launch {
        date
      }
    }
  }
  `,
    []
  );
};

// const createMission = async (
//   mission: Mission
// ): Promise<MissionsResponse> => {
//   return await fetchGraphQL(
//     `mutation ($mission: MissionInput){
//       createMission(mission: $mission){
//         id
//         title
//         operator
//         launch {
//         date
//         }
//       }
//     }
//     `,
//     { mission: mission }
//   );
// };

// פונקציה ששולחת מישין חדש לסרייביר
const Missions = (): JSX.Element => {
  const [missions, setMissions] = useState<Mission[] | null>(null);
  const [newMissionOpen, setNewMissionOpen] = useState(false);
  const [tempLaunchDate, setTempLaunchDate] = useState<Date | null>(null);
  const [sortDesc, setSortDesc] = useState<boolean>(false);
  const [sortField, setSortField] = useState<SortField>("Title");
  const [errMessage, setErrMessage] = useState<String | null>(null);
  const [title, setTitle] = useState<String | null>(null);
  const [operator, setOperator] = useState<String | null>(null);
  const [vehicle, setVehicle] = useState<String | null>(null);
  const [name, setName] = useState<String | null>(null);
  const [longitude, setLongitude] = useState<String | null>(null);
  const [latitude, setLatitude] = useState<String | null>(null);
  const [periapsis, setPeriapsis] = useState<String | null>(null);
  const [apoapsis, setApoapsis] = useState<String | null>(null);
  const [inclination, setInclination] = useState<String | null>(null);
  const [capacity, setCapacity] = useState<String | null>(null);
  const [available, setAvailable] = useState<String | null>(null);


  const handleErrClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setErrMessage(null);
  };

  const handleNewMissionOpen = () => {
    setTempLaunchDate(null);
    setNewMissionOpen(true);
  };

  const handleNewMissionClose = () => {
    // if (title && operator && tempLaunchDate && vehicle && name && longitude && latitude && periapsis && apoapsis && inclination && capacity && available)
    // {
    //   const newMission:Mission={
    //     setOperator(operator),
    //     setTitle(title),
    //     setTempLaunchDate(tempLaunchDate),
    //     setVehicle(vehicle),
    //     setName(name),
    //     setLongitude(longitude),
    //     setLatitude(latitude);
    //     setPeriapsis(periapsis),
    //     setApoapsis(apoapsis),
    //     setInclination(inclination),
    //     setCapacity(capacity),
    //     setAvailable(available);
    //   };
    //   createMission(newMission)
    //   .then((result:MissionsResponse)=>{
    //     setMissions([...missions!,result.data.createMission]);
    //   })
    //   .catch((err) => {
    //     setErrMessage("Failed to load missions.");
    //     console.log(err);
    //   });

    // }
    setNewMissionOpen(false);

  };

  const handleTempLaunchDateChange = (newValue: Date | null) => {
    setTempLaunchDate(newValue);
  };

  const handleSortFieldChange = (event: SyntheticEvent, value: SortField) => {
    setSortField(value);
  };
  const handleSortDescClick = () => {
    
    setSortDesc(!sortDesc);
  };



  useEffect(() => {
    getMissions(sortField,sortDesc)
      .then((result: MissionsResponse) => {
        setMissions(result.data.Missions);
      })
      .catch((err) => {
        setErrMessage("Failed to load missions.");
        console.log(err);
      });
  }, [sortField,sortDesc]);

  return (
    <AppLayout title="Missions">
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1">
          Solar Rocket Missions
        </Typography>

        <Toolbar disableGutters>
          <Grid justifyContent="flex-end" container>
            <IconButton>
              <FilterAltIcon  ></FilterAltIcon>
            </IconButton>
            <ListMenu
              options={["Date", "Title","Operator"]}
              endIcon={<SortIcon />}
              onSelectionChange={handleSortFieldChange}
            />
            <IconButton onClick={handleSortDescClick}>
              {sortDesc ? <ArrowDownwardIcon/> : <ArrowUpwardIcon />}
            </IconButton>
          </Grid>
        </Toolbar>

        {missions ? (
          <Grid container spacing={2}>
            {" "}
            {missions.map((missions: Mission, key: number) => (
              <Grid item key={key}>
                <Card sx={{ width: 275, height: 200 }}>
                  <CardHeader
                    title={missions.title}
                    subheader={new Date(missions.launch.date).toDateString()}
                  />
                  <CardContent>
                    <Typography noWrap>{missions.operator}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box sx={{ textAlign: "center" }}>
            <CircularProgress />
          </Box>
        )}
        
        <Tooltip title="New Mission">
          <Fab
            sx={{ position: "fixed", bottom: 16, right: 16 }}
            color="primary"
            aria-label="add"
            onClick={handleNewMissionOpen}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
        <Dialog
          open={newMissionOpen}
          onClose={handleNewMissionClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>New Mission</DialogTitle>
          <DialogContent>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  autoFocus
                  id="title"
                  label="Title"
                  variant="standard"
                  fullWidth
                  value={title}
                />
              </Grid>
              <Grid item  >
                <TextField 
                  autoFocus
                  id="operator"
                  label="Operator" variant="standard"  
                  fullWidth
                  value={operator}
                  
                />
              </Grid>
              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    minDate={new Date()}
                    minTime={new Date()}
                    label="Launch Date"
                    value={tempLaunchDate}
                    onChange={handleTempLaunchDateChange}
                    renderInput={(params) => (
                      <TextField variant="standard" {...params} />
                    )}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="vehicle"
                  label="Vehicle"
                  variant="standard"
                  fullWidth  
                  value={vehicle} 
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="name"
                  label="Name"
                  variant="standard"
                  fullWidth
                  value={name}
                />
              </Grid>
              
              <Grid item>
                <TextField
                  autoFocus
                  id="longitude"
                  label="Longitude"
                  variant="standard"
                  fullWidth
                  value={longitude}
                />
              </Grid>
       
              <Grid item>
                <TextField
                  autoFocus
                  id="latitude"
                  label="Latitude"
                  variant="standard"
                  fullWidth
                  value={latitude}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="periapsis"
                  label="Periapsis"
                  variant="standard"
                  fullWidth
                  value={periapsis}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="apoapsis"
                  label="Apoapsis"
                  variant="standard"
                  fullWidth
                  value={apoapsis}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="inclination"
                  label="Inclination"
                  variant="standard"
                  fullWidth
                  value={inclination}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="capacity"
                  label="Capacity"
                  variant="standard"
                  fullWidth
                  value={capacity}
                />
              </Grid>
              <Grid item>
                <TextField
                  autoFocus
                  id="available"
                  label="Available"
                  variant="standard"
                  fullWidth
                  value={available}


                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNewMissionClose}>Cancel</Button>
            <Button onClick={handleNewMissionClose}>Save</Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Snackbar
        open={errMessage != null}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleErrClose}
      >
        <Alert onClose={handleErrClose} variant="filled" severity="error">
          {errMessage}
        </Alert>
      </Snackbar>
    </AppLayout>
  );
};

export { Missions };
