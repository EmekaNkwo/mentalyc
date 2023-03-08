import { Box, Modal, Typography, Button } from "@mui/material";
import React from "react";
import { InputField, SelectField } from "../shared/components/CustomInputField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: "40%",
  },
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};
function UploadModal({
  open,
  handleClose,
  handleSubmit,
  setNote,
  note,
  clientName,
  setClientName,
}) {
  const notes = [
    {
      value: "Progress note - 80 left",
      title: "Progress note - 80 left",
    },
    {
      value: "Soap note - 80 left",
      title: "Soap note - 80 left",
    },
    {
      value: "EMDR note - 80 left",
      title: "EMDR note - 80 left",
    },
    {
      value: "Couples Therapy note - 80 left",
      title: "Couples Therapy note - 80 left",
    },
    {
      value: "Family Therapy note - 80 left",
      title: "Family Therapy note - 80 left",
    },
  ];
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Typography
              id="modal-modal-title"
              variant="h5"
              sx={{
                fontWeight: "500",
              }}
            >
              Complete your Upload
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ fontSize: "14px", textAlign: "center" }}
            >
              Fill in the details below to complete your upload
            </Typography>

            <SelectField
              items={notes}
              label="Select a note type"
              handleChange={(event) => {
                setNote(event.target.value);
              }}
              value={note}
              styles={{
                width: "100%",
                margin: "1rem 0 ",
              }}
            />
            <InputField
              styles={{
                width: "100%",
              }}
              label="Enter client name"
              value={clientName}
              handleChange={(event) => {
                setClientName(event.target.value);
              }}
            />

            <Button
              variant="contained"
              size="medium"
              style={{
                backgroundImage: "linear-gradient(to right, #731054, #DE0D6F)",
                margin: "1.5rem 0",
              }}
              onClick={handleSubmit}
            >
              Finish Upload
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default UploadModal;
