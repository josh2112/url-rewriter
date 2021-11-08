URL Rewriter
============

Legacy code for what used to be a Chrome extension that edits URLs according to a custom regular expression when accessing a web page. Based on "Host name rewriter" by Mattias Lundberg. Chrome's event hooks have changed a great deal since I originally wrote this, and since I don't use it anymore I haven't gotten around to updating it. If you've forked and fixed it, let me know and I'll add a link to your repo.

URL Rewriter edits certain URLs, whether typed in or linked, via a set of rules before navigating to the URL. A rule consists of a regular expression specified in capture groups, a capture group number to replace, and the replacement text for that group. When you click on a link or type a URL in the address bar, it is checked against each of the rules. If a matching rule is found, the text of the specified capturing group number is replaced with the specified text.

Example:
 - Regex: ```^(http[s]+\:\/\/.*\.)(toothboiler)(\..*\/watch\?v=.*)$```
 - Group number to replace: 2
 - Replacement text: ```youtube```
 - If you click a link for ```http://www.toothboiler.com/watch?v=abcdefg```, it matches the regex rule and capture group 2 (```toothboiler```) is replaced with ```youtube``` to result in ```http://www.youtube.com/watch?v=abcdefg```.

