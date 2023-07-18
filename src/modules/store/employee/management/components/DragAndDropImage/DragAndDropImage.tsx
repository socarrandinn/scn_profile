import { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box } from '@mui/material';
import { green } from '@mui/material/colors';
import './styles.css';

export default function DragAndDropImage() {
  // drag state
  const [dragActive, setDragActive] = useState(false);

  // handle drag events
  const handleDrag = function (e:any) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e:any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // at least one file has been dropped so do something
      // handleFiles(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e:any) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // at least one file has been selected so do something
      // handleFiles(e.target.files);
    }
  };

  return (
    <Box>
      <input
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div className="content">
          <CloudUploadIcon sx={{ color: green[500] }} />
          <Typography
            sx={{ color: green[500], padding: '1rem 0' }}
            variant="body1"
            component="span"
          >
            Arrastre archivos para ajustar o explora
          </Typography>
        </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </Box>
  );
}
