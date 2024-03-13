package main

import (
	"fmt"
	"strings"
)

func reverse(str string) (res string) {
	for _, v := range str {
		res = string(v) + res
	}

	return
}

func SpinWords(str string) string {

	splitted := strings.Split(str, " ")
	reversed := []string{}

	for _, v := range splitted {
		if len(v) >= 5 {
			reversed = append(reversed, reverse(v))
		} else {
			reversed = append(reversed, v)
		}
	}

	return strings.Join(reversed, " ")
}

func main() {
	fmt.Println(SpinWords("the hello world"))
}
