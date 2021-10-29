import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const initialization=()=>{
return initializeApp(firebaseConfig);
}

export default initialization;