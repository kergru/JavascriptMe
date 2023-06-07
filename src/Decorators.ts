// Decorators

// Class Decorator executed when JS finds class definition
export function Logger(logString: string) { // Decorator functions start with upper case (code convention)
  return function Logger(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

// Class Decorator that replaces the original class (which is executed when JS finds class definition)
// but the decorator code (replaced constructor code) will be executed at class instantiation
export function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends {new(...args: any[]): any}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if(hookEl) {
          hookEl.innerHTML= template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    };
  };
}