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
git clone https://github.com/satendracoder/sc-angular-snippets
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
- `ng-svc` → Angular Service -`ng-cmp` →Angular Component (with template file) -`ng-cmp-inline` →Angular Component (inline template) -`ng-pipe` →Angular Pipe -`ng-dir` →Angular Directive -`ng-guard` →Angular Route Guard -`ng-mod` →Angular Module -`ng-resolver` →Angular Resolver -`ng-int` →HTTP Interceptor (basic) -`ng-int-auth` →HTTP Interceptor (with JWT token)

# Generate a component

ngg ng-cmp my-component

# Generate a service

ngg ng-svc my-service

# Generate a pipe

ngg ng-pipe my-pipe

# Generate a module

ngg ng-mod shared

# Generate an HTTP interceptor with JWT token

ngg ng-int-auth auth

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

**Satendra Rajput**

## 👨‍💻 Author

**Satendra Coder**

🌐 Website: [satendracoder.com](https://satendracoder.com)  
💼 LinkedIn: [linkedin.com/in/satendracoder](https://linkedin.com/in/satendracoder)
📘 Facebook: [facebook.com/satendracoder1](https://facebook.com/satendracoder1)  
📸 Instagram: [instagram.com/satendracoder1](https://instagram.com/satendracoder1)  
▶️ YouTube: [youtube.com/@satendracoder](https://youtube.com/@satendracoder)  
🐦 Twitter/X: [twitter.com/satendracoder](https://twitter.com/satendracoder)

---

## 📜 License

MIT License – free to use and modify.
