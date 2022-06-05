module.exports = {
    wordFrequency: function(doc, word){
        throw new Error("Not implemented exception")
    },

    wordSentences: function(doc, word){
        throw new Error("Not implemented exception")
    },

    topWords: function(doc, count, minWordLength){
        throw new Error("Not implemented exception")
    },

    stringToWordsArray: function(text) {
        return text.match(/[a-zÀ-ú]+/gmui);
    }
}

