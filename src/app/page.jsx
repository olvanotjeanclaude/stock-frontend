import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Our Brand</h1>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
}