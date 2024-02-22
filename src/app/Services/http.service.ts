import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../Models/Course';
import { OrderBackend } from '../Models/OrderBackend';
import { Category } from '../Models/Category';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackBackend } from '../Models/FeedbackBackend';
import { FilterDate } from '../Models/FilterDate';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient, private snackBar:MatSnackBar) {
   }

  URL="http://localhost:8080"

  logInWithToken(){
    return this.http.get(this.URL+`/user/login/token`)
  }

  displayError(error){
    this.snackBar.open(error.error.message, "Dismiss")
  }

  displayResponse(data){
    this.snackBar.open(data.message, "Dismiss")
  }

  getCourse(page){
   return this.http.get(this.URL+`/user/courses/pageNo=${page}`)
  }

  // all category
  getCategory(){
    return this.http.get(this.URL+'/user/category')
  }

  // get all course by category
  getCourseByCategoryName(categoryId:number, pageNo:number){
    return this.http.get(this.URL+`/user/courses/${categoryId}/pageNo=${pageNo}`)
  }

  // get course by coursename
  getCourseByCourseName(courseName:string){
    return this.http.get(this.URL+`/user/courses/courseName=${courseName}`)
  }

  getCourseByCourseId(courseId:number){
    return this.http.get(this.URL+`/user/course/courseId=${courseId}`)
  }

  // update course
  addCourse(course:Course){
    return this.http.put(this.URL+`/admin/courses`, course)
  }

  // get cart
  getCart(){
    return this.http.get(this.URL+`/user/cart`)
  }

  // add to cart
  addToCart(courseId:number){
    return this.http.put(this.URL+`/user/course/${courseId}`, {})
  }

  // remove from cart
  deleteFromCart(courseId:number){
    return this.http.delete(this.URL+`/user/course/${courseId}`)
  }

  // get Orders
  getOrder(){
    return this.http.get(this.URL+`/user/order`)
  }

  // buy now
  buyCourses(Order:OrderBackend){
    return this.http.post(this.URL+`/user/order`, Order)
  }

  // Add course
  createCourse(course:Course){
    return this.http.post(this.URL+`/admin/courses`, course)
  }

  // add category
  createCategory(category:Category){
    return this.http.post(this.URL+`/admin/category`, category)
  }

  // get all users
  getUser(){
    return this.http.get(this.URL+`/admin/users`)
  }

  // delete user
  deleteUser(userId:number){
    return this.http.delete(this.URL+`/admin/users/${userId}`)
  }

  // get all orders
  getAllOrders(page:number){
    return this.http.get(this.URL+`/admin/order/pageNo=${page}`)
  }

  // get feedback by course id
  getFeedbackByCourseId(courseId:number){
    return this.http.get(this.URL+`/user/feedback/${courseId}`)
  }

  deleteFeedback(f){
    return this.http.delete(this.URL+`/user/feedback/${f.courseFeedbackId}`)
  }

  // add feedback
  addFeedback(courseId:number, feedback:FeedbackBackend){
    return this.http.post(this.URL+`/user/feedback/course/${courseId}`, feedback)
  }

  // sign up
  signUp(user){
    return this.http.post(this.URL+`/user/signup`, user)
  }

  // logIn
  login(user){
    return this.http.post(this.URL+`/user/login`, user)
  }

  // delete course
  deleteCourse(courseId:number){
    return this.http.delete(this.URL+`/admin/courses/${courseId}`)
  }

  getChartDate(){
    return this.http.get(this.URL+`/admin/orders/chart`)
  }

  getWeeklyData(){
    return this.http.get(this.URL+`/admin/orders/weekly`)
  }

  getDailyFilteredData(filterDate:FilterDate){
    return this.http.post(this.URL+`/admin/orders/daily/sort`, filterDate)
  }

  getWeeklyFilteredData(filterDate:FilterDate){
    return this.http.post(this.URL+`/admin/orders/weekly/sort`, filterDate)
  }

}
