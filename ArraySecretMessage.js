let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// remove last string
secretMessage.pop()

// add to end o array
secretMessage.push('to', 'program')

// replace 
secretMessage[7] = 'right'

// remove first string
secretMessage.shift()

// add to begining
secretMessage.unshift('Programming')

// remove and replace... (starting index, ending index, replace string)
secretMessage.splice([6], [6], 'know')

// joining '' and having space between strings to make sentence
console.log(secretMessage.join(' '))