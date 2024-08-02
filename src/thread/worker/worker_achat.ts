import { getEnvironmentData, parentPort } from "worker_threads";
import { axiosRequestServerAchat } from "../../config/request/axios/requestServerToServer";
import { userExtend } from "../../utils/constant/user";
import { workerTs } from "../../config/worker/worker";

export const createUserExtend = async () => {
    let data = "";
    try {
      const response = await axiosRequestServerAchat().post('register', userExtend);
      data = response.data; // Assurez-vous que c'est le bon champ selon votre API
    } catch (error) {
      console.error(error);
      throw error; // Propager l'erreur si nécessaire
    }
    return data;
  };

  // Dans votre fichier Worker
(async () => {
    try {
      const result = await createUserExtend();
      parentPort?.postMessage(result);
    } catch (error) {
      console.error("Erreur lors de la création d'utilisateur étendu:", error);
      // Vous pouvez choisir de poster l'erreur ou de simplement la logger ici
      parentPort?.postMessage({ error: "Une erreur s'est produite." });
    }
  })();
  

export  const serviceAchat = async() => {
    let wk = workerTs(__filename, {
        workerData: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
    wk.on("online", () => console.log('Worker UP'));
    wk.on("message", (msg) =>{
        console.log('message:', msg)
    });
    wk.on("exit", (code) =>{
        console.warn('exit', code)
    } ); 
    wk.on("error", (err) => {
        console.error('error', err)
    });
}