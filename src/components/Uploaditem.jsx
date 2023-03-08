/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
  IconButton,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import ProgressBarWithLabel from "../shared/components/ProgressBarWithLabel";

function Uploaditem({ processingTasks, setProcessingTasks }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setProcessingTasks((prevTasks) =>
        prevTasks
          .map((task) => {
            if (task.progress === 100) {
              // Remove the task from the list when it reaches 100%
              return null;
            }
            const newProgress = task.progress + Math.random() * 10;
            return {
              ...task,
              progress: newProgress > 100 ? 100 : newProgress,
            };
          })
          .filter((task) => task !== null)
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = (index) => {
    console.log("Deleted");
    setProcessingTasks((prevTasks) =>
      prevTasks.filter((task, i) => i !== index)
    );
  };
  return (
    <>
      <div>
        <Divider />
        <Typography
          variant="h5"
          component="h2"
          sx={{
            margin: "0.5rem 0",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "1.2rem",
          }}
        >
          <span
            className="
          w-8 h-8 flex items-center justify-center
           rounded-full text-center text-white bg-[#DE0D6F]"
          >
            {processingTasks.length}
          </span>
          Notes in progress
        </Typography>
        <Divider />
        <TableContainer
          component={Paper}
          sx={{
            margin: "1rem 0",
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Client</TableCell>
                <TableCell align="center">Type</TableCell>
                <TableCell align="center">ETA</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <>
                {processingTasks.map((task, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {task.name}
                    </TableCell>

                    <TableCell align="center">{task.noteType}</TableCell>

                    <TableCell align="center">
                      <ProgressBarWithLabel progress={task.progress} />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton>
                        <MdDeleteOutline
                          className="text-[#FF6079]"
                          onClick={() => {
                            handleDelete(index);
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default Uploaditem;
