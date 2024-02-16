import { Category } from "./Category"

export interface CourseBackend{
    courseId:number
    courseName:string
    courseDescription:string
    courseLevel:string
    price:number
    category:Category
}