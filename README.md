# blabber

### Interface Options

**Option 2**
```html
<p id="money"></p>
```

```javascript
new Blabber("money", ["money", "more money", "we make you more money"])
```

**Option 1**

```html
...
<p><span id="money"></span></p>
...
```

```javascript
new Blabber({
  el: "#money",
  from: "More money",
  to: "We've helped over 9,000 companies achieve over 3x in annualized revenue"
});
```
