package main

import (
	"fmt"
	"log"
	"net/http"
	"strings"
)

func getComment(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
	w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
	w.Header().Set("content-type", "application/json")             //返回数据格式是json

	r.ParseForm()       //解析参数，默认是不会解析的
	fmt.Println(r.Form) //这些信息是输出到服务器端的打印信息

	for k, v := range r.Form {
		fmt.Println(k)
		fmt.Println(strings.Join(v, ""))
	}
	fmt.Fprintf(w, "Hello Wrold!")
}
func main() {
	http.HandleFunc("/", getComment)         //设置访问的路由
	err := http.ListenAndServe(":9090", nil) //设置监听的端口
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}
