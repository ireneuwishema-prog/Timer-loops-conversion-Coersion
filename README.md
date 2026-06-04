<div align="center">
  <h1>⏳ Timer, Loops, Conversion & Arrays Guide 🚀</h1>
  <p>A structured cheat-sheet explaining JavaScript fundamentals, type mutations, and essential array manipulation methods.</p>


## ⏱️ Timers & Execution
> Control time-based actions in your code.
> Control time-based actions in your code.

*   **Timers (`setTimeout` & `setInterval`):** Used to handle execution timing. It defines the specific delay or interval time it will take before a function triggers.

---

## 🔁 Control Flow
> Stop writing repetitive code.

*   **Loops:** Loops help us automate tasks so we don't have to write excessive lines of code or repeat ourselves manually.

---

## 🎭 Type Mutation
> How data shifts from one data type to another.


| Concept | Definition | Mechanism |
| :--- | :--- | :--- |
| **Conversion** | Manually converting one type to another. | Done by us intentionally. |
| **Coercion** | Converting one type to another behind the scenes. | Happens automatically by the language. |

---

## 🛠️ Array Methods
> Clean, powerful ways to filter, transform, and manage lists of data.

### 🔍 Filtering & Iteration

*   **`filter`**  
    Use this when you need to selectively remove elements from an array (for example, removing numbers with a negative sign).
*   **`forEach`**  
    Performs an action for each item directly without creating a new array. It executes the function across all items in one run rather than calling them individually.
*   **`map`**  
    Transforms elements inside an array and returns a brand-new array with the modified values.

### 📐 Ordering & Slicing

*   **`sort`**  
    Arranges numbers into a specific order:
    *   From smallest to highest `-`
    *   From biggest to smallest `+`
*   **`slice`**  
    Extracts elements one by one from a specified starting point up to an endpoint without changing the original array.
*   **`splice`**  
    Removes items from a starting point to an endpoint, and can also be used to replace the deleted numbers with new ones.

### 🧮 Utility & String Transformation

*   **`includes`**  
    Checks if a specific item exists in the array. It returns `true` if it exists, and `false` if it does not.
*   **`split`**  
    Breaks apart a string and converts it into a structured array.

---

<details>
<summary>💡 <b>Quick Code Reference Example</b></summary>

```javascript
// Quick visual example of split and includes
const sentence = "Timer-loops-conversion-Coercion";
const array = sentence.split("-"); 

console.log(array); // ['Timer', 'loops', 'conversion', 'Coercion']
console.log(array.includes("loops")); // true
```
</details>

<div align="center">
  <br />
  <sub>Built with ❤️ to master JavaScript fundamentals made by Irene Dev.</sub>
</div>
