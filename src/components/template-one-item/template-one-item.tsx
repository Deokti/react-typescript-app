type templateFirstTodoType = {
  label: string,
  done: boolean,
  id: string
}

const templateOneItem = (label: string): templateFirstTodoType => {
  return {
    label,
    done: false,
    id: String(new Date().valueOf())
  }
};

export { templateOneItem };