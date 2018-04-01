import { PostPreview } from "../post-preview/post-preview.model";

// Using a service even if the data if fixed in case moved to server/db later...
export class PostListService {
    getPosts(lang: string) : PostPreview[] {
        return posts[lang];
    }
}

const adventureBegins: PostPreview = {
    title: "Adventure Begins",
    img: "",
    summary: "The adventure begins..."
}
const aventuraComienza: PostPreview = {
    title: "La aventura comienza",
    img: "",
    summary: "La aventura comienza..."
}

const choosingVocation: PostPreview = {
    title: "Choosing Vocation",
    img: "",
    summary: "In tibia there are 4 vocations"
}
const eligiendoVocacion: PostPreview = {
    title: "Eligiendo vocación",
    img: "",
    summary: "En tibia es posible elegir 4 voaciones"
}

const posts = {
    en: [adventureBegins, choosingVocation],
    es: [aventuraComienza, eligiendoVocacion]
}
