import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC3m5BvbyvvFiPi_ykcjbhz_skyYvc0hic",
  authDomain: "van-life-983b6.firebaseapp.com",
  projectId: "van-life-983b6",
  storageBucket: "van-life-983b6.appspot.com",
  messagingSenderId: "620683696092",
  appId: "1:620683696092:web:592ad9c4a50c13934ee119"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const vansCollectionRef = collection(db, "vans")


export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, 'vans', id)
    const snapshot = await getDoc(docRef)
    const van = {
        ...snapshot.data(),
        id: snapshot.id
    }

    return van

}


export async function getHostVans() {
    const q = query(vansCollectionRef, where('hostId', '==', '123'))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}