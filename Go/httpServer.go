package main

import (
	"io"
	"io/ioutil"
	"net/http"
	"fmt"
	"os"
)

func check(e error){
	if e != nil {
		panic (e)
	}
}


func getScript(w http.ResponseWriter, r *http.Request){
	dat, err := ioutil.ReadFile("../DocGen/display.js")
	check(err)
	io.WriteString(w, string(dat))
}

func displayHtml(w http.ResponseWriter, r *http.Request){
	dat, err := ioutil.ReadFile("../DocGen/index.html")
	check(err)
	io.WriteString(w, string(dat))
}

func main(){
	portNum := os.Args[1]
	port := fmt.Sprint(":", portNum)
	fmt.Println(port)
	http.HandleFunc("/display.js", getScript)
	http.HandleFunc("/", displayHtml)
	http.ListenAndServe(port, nil)
}


