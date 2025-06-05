# 📝 Task Management App (POC)

This is a simple **Task Management App** built as a **Proof of Concept (POC)** using the modern Vue ecosystem. It demonstrates clean architecture, modular component design, and basic task operations with filtering.

Built with:

* 🧱 [Nuxt 3](https://nuxt.com/)
* ⚙️ [Vue 3 Composition API](https://vuejs.org/)
* 🎨 [Quasar UI Kit](https://quasar.dev/)
* 🛆 [Pinia](https://pinia.vuejs.org/) for state management
* 🌐 [Vue Router](https://router.vuejs.org/) for routing
* 🤪 [Vitest](https://vitest.dev/) + [@testing-library/vue](https://testing-library.com/docs/vue-testing-library/intro/) for unit testing

---

## 🚀 Getting Started

### 📦 Install dependencies

```bash
yarn install
```

### 🚪 Run the development server

```bash
yarn dev
```

### 🔧 Build for production

```bash
yarn build
```

### 🔢 Run tests

```bash
yarn test
```

---

## 📅 Features

* Add, update, delete tasks
* Filter tasks by:

  * Priority (Urgent, High, Low)
  * Due Date
  * Search keyword
* Move tasks between lists (Todo, In Progress, Done)

---

## 🤔 Future Enhancements

* 🚀 **Backend Integration**: Connect to an API for task persistence
* ⚠️ **Validation**: Improve form inputs with proper validation rules
* ✅ **Test Coverage**: Add missing tests for filters and edge cases
* 🧲 **Drag-and-Drop**: Implement drag-and-drop reordering of tasks
* ↕️ **Sorting**: Allow tasks to be sorted by date, priority, etc.

---

## 📄 Folder Structure (Brief)

```
components/        # Vue components
composables/       # Reusable composition logic
pages/             # Nuxt pages
store/             # Pinia store for tasks
types/             # TypeScript interfaces and types
helpers/           # Utility and helper functions
test/              # Unit tests and testing utilities
```

---

## 📊 Tech Stack

* **Vue 3**: Reactive and modular UI framework
* **Nuxt 3**: Hybrid-rendering meta-framework for Vue
* **Pinia**: Lightweight, intuitive state management
* **Quasar**: Beautiful UI components
* **Vitest**: Fast and feature-rich test runner
* **Testing Library**: Focused on testing user interactions

---

## 🚧 Notes

* This project uses **Yarn** as the package manager.
* `v-model` with `@update:model-value` is used for reactive form inputs.
* A set of `priorityOptions` is shared across components via a central helper file.

---

## 📦 License

This project is open-sourced for learning and demonstration purposes.
Feel free to fork and adapt it to your needs.

---

