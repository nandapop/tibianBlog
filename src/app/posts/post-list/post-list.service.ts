import { PostPreview } from "../post-preview/post-preview.model";

// Using a service even if the data if fixed in case moved to server/db later...
export class PostListService {
    getPosts(lang: string) : PostPreview[] {
        return posts[lang];
    }
}

const adventureBegins: PostPreview = {
    title: "Adventure Begins",
    img: "assets/images/posts/adventure-begins/tobias-the-tall.png",
    summary: "If you have never heard about Tibia, is a MMORPG developed in 1997 by a group of students from Regensburg, Germany, thanks to the success of the game they were able to build a company around it name CipSoft...",
    link: "adventure-begins"
}
const aventuraComienza: PostPreview = {
    title: "La aventura comienza",
    img: "",
    summary: "La aventura comienza...",
    link: "aventura-comienza"
}

const choosingVocation: PostPreview = {
    title: "Choosing Vocation",
    img: "assets/images/posts/choosing-vocation/unicorn.jpg",
    summary: "In tibia there are 4 vocations",
    link: "choosing-vocation"
}
const eligiendoVocacion: PostPreview = {
    title: "Eligiendo vocación",
    img: "",
    summary: "En tibia es posible elegir 4 vocaciones",
    link: "eligiendo-vocacion"
}

const posts = {
    en: [adventureBegins, choosingVocation],
    es: [aventuraComienza, eligiendoVocacion]
}
