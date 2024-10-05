import { useState } from "react";
import { VscClose } from "react-icons/vsc";
import styled from "styled-components";
import styles from "./index.module.scss";

const Practice = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const onSelectFile = (e: any) => {
    e.preventDefault();
    e.persist();

    const files = e.target.files;
    const fileArray = Array.from(files);

    const fileUrlList = fileArray.map((file: any) => URL.createObjectURL(file));

    setSelectedFiles(fileArray);

    const imageArray = fileArray.map((file: any) => file.name);

    setSelectedImages((previousImages: string[]) =>
      previousImages.concat(imageArray)
    );

    e.target.value = "";
  };

  const uploadFiles = async () => {
    if (selectedFiles.length === 0) return;

    const formData = new FormData();

    // Append all selected files to the FormData object
    selectedFiles.forEach((file: File) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Upload successful:", result);
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const attachFile =
    selectedImages &&
    selectedImages.map((image: string) => {
      return (
        <div
          key={image}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div>{image}</div>
          <button
            style={{ backgroundColor: "transparent" }}
            onClick={() =>
              setSelectedImages(selectedImages.filter((e) => e !== image))
            }
          >
            <VscClose style={{ color: "white" }} size="30" />
          </button>
        </div>
      );
    });

  return (
    <div>
      <h2 className={styles.title}>직접 실습해보세요 👻</h2>
      <div className={styles.input}>
        <div className={styles.inputFile}>
          {selectedFiles.length !== 0 ? <div>{attachFile}</div> : null}
          {selectedImages.length === 0 && (
            <input
              type="file"
              name="files"
              onChange={onSelectFile}
              accept=".php"
            />
          )}
          {selectedFiles.length !== 0 ? (
            <button className={styles.button} onClick={uploadFiles}>
              Go!
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Practice;
