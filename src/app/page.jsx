import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@mui/material";
import { redirect } from "next/navigation";


export default function Home() {

  redirect("/dashboard");
  
  return (
    <div>
      <h1>Welcome to Our Brand</h1>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </div>
  );
}