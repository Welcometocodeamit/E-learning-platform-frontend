import { Category } from "./Category"

export interface CourseBackend{
    courseId:number
    courseName:string
    courseDescription:string
    courseLevel:string
    image:String
    price:number
    category:Category
}