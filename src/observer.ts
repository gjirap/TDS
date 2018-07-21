export
namespace Observer {
  export
  interface Observer {
    update(): void;
  }

  export
  interface Subject {
    addObserver(observer: Observer): boolean;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
  }
}