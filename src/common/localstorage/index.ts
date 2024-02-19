const key_prefix = 'cimNnemnc3lk2n--'
const key_unique_checker = new Set()

export
abstract class Localstorage_manager<Value> {
  private key: string
  private value: Value
  constructor(_key: string, default_value: Value) {
    this.key = key_prefix + _key
    if (key_unique_checker.has(this.key))
      throw Error('duplicated localstorage key: ' + this.key)
    key_unique_checker.add(this.key)

    const raw = localStorage.getItem(this.key)
    if (raw === null)
      // localStorage.setItem(this.key, default_value) // 未保存默认设置
      this.value = default_value
    else
      this.value = this.parse(raw)
  }

  abstract parse(raw: string): Value
  abstract stringify(value: Value): string

  save(value: Value) {
    localStorage.setItem(this.key, this.stringify(value))
    this.value = value
  }

  get() {
    return this.value
  }
}

export
class Localstorage_manager_string extends Localstorage_manager<string> {
  parse(raw: string) {
    return raw
  }
  stringify(value: string) {
    return value
  }
}

export
class Localstorage_manager_boolean extends Localstorage_manager<boolean> {
  parse(raw: string) {
    return raw === 'true'
  }
  stringify(value: boolean) {
    return value ? 'true' : 'false'
  }
}

export
class Localstorage_manager_number extends Localstorage_manager<number> {
  parse(raw: string) {
    return Number(raw)
  }
  stringify(value: number) {
    return value.toString()
  }
}

export
class Localstorage_manager_json<Value> extends Localstorage_manager<Value> {
  parse(raw: string) {
    return JSON.parse(raw)
  }
  stringify(value: Value) {
    return JSON.stringify(value)
  }
}
