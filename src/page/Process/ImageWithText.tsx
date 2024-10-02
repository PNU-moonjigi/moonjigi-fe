import styles from "./ImageWithText.module.scss";
import {ReactNode} from "react"; // Import the SCSS module

interface ImageWithTextProps {
    children: ReactNode;
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ children }) => {    return (
        <div className={styles["image-container"]}>
            <img className={styles["styled-image"]} src="src/assets/terminal.png" alt="background" />
            <div className={styles["text-overlay"]}>{children}</div>
        </div>
    );
};

export default ImageWithText;
