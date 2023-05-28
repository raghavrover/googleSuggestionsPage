import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, addSuggestion} = props
  const {suggestion} = suggestionItem

  const onAddSuggestion = () => {
    addSuggestion(suggestionItem)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="arrow-img"
        alt="arrow"
        onClick={onAddSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
