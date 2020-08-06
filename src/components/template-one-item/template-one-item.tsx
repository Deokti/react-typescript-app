type templateFirstTodoType = {
  label: string,
  done: boolean,
  id: number
}

let id = 0;

const templateOneItem = (label: string): templateFirstTodoType => {
  return {
    label,
    done: false,
    id: id++,
  }
};

export { templateOneItem };