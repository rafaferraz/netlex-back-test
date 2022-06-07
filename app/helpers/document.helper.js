module.exports = {
  wordFrequency: function (doc, word) {
    try {
      return doc.match(new RegExp(word, "gimu")).length;
    } catch (e) {
      return e;
    }
  },

  wordSentences: function (doc, word) {
    const pattern = new RegExp("^[A-ZÀ-Ú][^(.:;\n)]+[(.:;\n)]", "gmu");

    try {
      return doc.match(pattern).filter((sentence) => {
        return sentence.match(new RegExp(word, "gimu"));
      });
    } catch (e) {
      return e;
    }
  },

  topWords: function (doc, count, minWordLength) {
    try {
      const words = stringToWordsArray(doc.toLowerCase());
      const wordCount = {};

      words.forEach((word) => {
        if (word.length >= minWordLength) {
          if (wordCount[word]) {
            wordCount[word]++;
          } else {
            wordCount[word] = 1;
          }
        }
      });

      const wordCountArray = Object.keys(wordCount).map((key) => {
        return {
          word: key,
          count: wordCount[key],
        };
      });

      let done = false;
      while (!done) {
        done = true;
        for (let i = 0; i < wordCountArray.length; i++) {
          for (let j = i + 1; j < wordCountArray.length; j++) {
            if (wordCountArray[i].count < wordCountArray[j].count) {
              done = false;
              const aux = wordCountArray[i];
              wordCountArray[i] = wordCountArray[j];
              wordCountArray[j] = aux;
            }
          }
        }
      }

      return wordCountArray.slice(0, count);
    } catch (e) {
      return e;
    }
  },

  stringToWordsArray: function (text) {
    return text.match(/[a-zÀ-ú]+/gimu);
  },
};
