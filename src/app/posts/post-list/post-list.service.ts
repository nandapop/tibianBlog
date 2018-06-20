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
    img: "assets/images/posts/adventure-begins/tobias-the-tall.png",
    summary: "Si tu nunca has escuchado acerca de Tibia, es un MMORPG desarrollado en 1997 por un grupo de estudiantes de Regenburg, Alemania, gracias al éxito del juego ellos fueron capaces de construir una compañía con el nombre de CipSoft...",
    link: "aventura-comienza"
}

const choosingVocation: PostPreview = {
    title: "Choosing Vocation",
    img: "assets/images/posts/choosing-vocation/unicorn.jpg",
    summary: "In tibia there are 4 vocations...",
    link: "choosing-vocation"
}
const eligiendoVocacion: PostPreview = {
    title: "Eligiendo vocación",
    img: "assets/images/posts/choosing-vocation/unicorn.jpg",
    summary: "Luego de ingresar a tibia con mi nuevo personaje y superado el tutorial, decidi recorrer las cuatro profesiones que son posible probar en Dawnport comenzando con el paladin y finalmente quedandome con el...",
    link: "eligiendo-vocacion"
}

const posts = {
    en: [adventureBegins, choosingVocation],
    es: [aventuraComienza, eligiendoVocacion]
}
