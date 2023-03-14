# Node Express 1
## Async and Scripting Practice
Write a Command-Line Script

Write a script, urls.js, that does the following:
- It is called on the command line like node urls.js FILENAME, and it reads the contents of FILENAME (each line of that file will be a URL).
- For each URL, it will get that page (a GET request to the URL) and save the HTML in a new file.
- For each URL, the output filename should be the hostname of the URL. For example, for the input URL http://yahoo.com/blah/blah, your script should write the contents to a plain text file called yahoo.com

## Handle Errors
- If you cannot read the original file (FILENAME), immediately end your script with an error printed to the console.
- If you cannot download a particular URL or cannot write to a particular output file, print an error to the console saying so, but continue on with the rest of the script.

## Examples
We provide a file, urls.txt, which contains:
```
urls.txt
http://rithmschool.com
http://postgresql.com
http://foozlemcblargh.com
https://nodejs.org/api/console.html
```

Invoking the script should look something like this:
```
$ node urls.js urls.txt
Couldn't download http://foozlemcblargh.com
Wrote to rithmschool.com
Wrote to nodejs.org
Wrote to postgresql.com

$ ls
nodejs.org
postgresql.com
rithmschool.com

$ cat nodejs.org
<!doctype html>...
```

