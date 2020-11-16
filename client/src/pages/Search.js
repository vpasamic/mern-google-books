import React, { Component } from "react";
import Form from "../components/Form";
import API from "../utils/API";
import Result from "../components/Results"

class Search extends Component {
    state = {
        search:"",
        books: [],
        results: [],
        title: ""
    }
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.searchGoogle(this.state.search)
            .then(res => {
                console.log(res.data.items)
                let results = res.data.items
                results = results.map(result => {
                    result = {
                        key: result.id,
                        id: result.id,
                        title: result.volumeInfo.title,
                        author: result.volumeInfo.authors,
                        description: result.volumeInfo.description,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        link: result.volumeInfo.infoLink
                    }
                return result; 
                })
                this.setState({ books: results, error: "" })
            })
            .catch(err => {
                throw err
            })
    }
    saveBookbutton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <Form
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <Result books={this.state.books} handleSavedButton={this.saveBookbutton}/>



            </div>
        );
    }

















}

export default Search