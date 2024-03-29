# User Mention Functionality for Editor.js

![Screenshot1](https://github.com/ranemihir/editorjs-user-mention-tool/blob/master/usertag-1.png)

![Screenshot2](https://github.com/ranemihir/editorjs-user-mention-tool/blob/master/usertag-2.png)

- The **User Mention Functionality** allows the editor.js to add tags which link to
the selected users.
- It is detached from the EditorJS project, so that it will not affect updating the plugins or the 
EditorJS project itself.

## Example

Below is an example of how **User Mention Funtionality** has to be implemented:

```javascript
new UserMention({
    holder: 'editorjs',
    allUsers: [
        {
            "id": "21029",
            "name": "Sperk",
            "slug": "sperk"
        }
    ],
    baseUrl: 'https://fatcap.com/', 
    searchAPIUrl: 'https://www.searchapi.com/'
});
```

## Properties

| Properties     | Explaination               | 
|----------------|----------------------------|
| `holder`       | editorjs hodler property   |
| `allUsers`     | all user objects           |
| `baseUrl`      | base URL for linking users |
| `searchAPIUrl` | search API URL             |
