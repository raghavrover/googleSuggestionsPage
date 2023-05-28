import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: '', loading: false, isSelected: false}

  getSearchInput = event => {
    this.setState({searchInput: event.target.value})
    this.setState({loading: false})
    this.setState({isSelected: false})
  }

  addSuggestion = suggestionItem => {
    this.setState({searchInput: suggestionItem.suggestion})
    this.setState({loading: true})
    this.setState({isSelected: true})
  }

  render() {
    const {searchInput, loading, isSelected} = this.state
    const {suggestionsList} = this.props

    const newSuggestionsList = suggestionsList.filter(eachSuggestion => {
      const temp = searchInput.toLowerCase()
      const temp2 = eachSuggestion.suggestion.toLowerCase()
      return temp2.includes(temp)
    })
    return (
      <div className="bg-container">
        <div className="suggestions-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-bar-suggestions-container">
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.getSearchInput}
                value={searchInput}
              />
            </div>
            {!isSelected && (
              <ul className="suggestions-container">
                {newSuggestionsList.map(eachSuggestion => (
                  <SuggestionItem
                    suggestionItem={eachSuggestion}
                    key={eachSuggestion.id}
                    addSuggestion={this.addSuggestion}
                  />
                ))}
              </ul>
            )}
            {loading && (
              <p className="loading-site">Chalo Loading...{searchInput}</p>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
