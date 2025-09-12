# 📦 sc-angular-snippets

**Ready-made Angular code snippets & CLI boilerplate generator**  
Generate Angular services, interceptors, components, and pipes in seconds. Save time and avoid writing repetitive boilerplate.

---

## 🚀 Installation

### 1. Install Globally (Recommended)

```bash
npm install -g sc-angular-snippets
```

Now you can use the `ngg` command anywhere in your Angular projects.

### 2. Local Development (for contributors)

```bash
git clone https://github.com/your-username/sc-angular-snippets.git
cd sc-angular-snippets
npm install
npm link
```

---

## ⚡ Usage

Use the CLI command:

```bash
ngg <type> <name>
```

### Available Types:

- `svc` → Generate Angular Service
- `int` → Generate HTTP Interceptor
- `cmp` → Generate Component
- `pipe` → Generate Pipe

---

## 📝 Examples

### Generate a Service

```bash
ngg svc user
```

📂 Output: `user.service.ts`

### Generate an Interceptor

```bash
ngg int auth
```

📂 Output: `auth.interceptor.ts`

### Generate a Component

```bash
ngg cmp profile
```

📂 Output: `profile.component.ts`

### Generate a Pipe

```bash
ngg pipe capitalize
```

📂 Output: `capitalize.pipe.ts`

---

## 📂 Example Service Output

```ts
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  getData() {
    return "Hello from UserService";
  }
}
```

---

## ✨ Features

- Fast boilerplate generation
- Consistent Angular code structure
- Works on Windows, macOS, Linux
- Saves time for developers

---

## 🛠️ Roadmap

- [ ] Generate Reactive Form boilerplate
- [ ] Generate Models & Interfaces
- [ ] Generate Route Guards
- [ ] More Angular utilities

---

## 👨‍💻 Author

**Satendra Coder**  
🌐 [satendracoder.com](https://satendracoder.com)

---

## 📜 License

MIT License – free to use and modify.
