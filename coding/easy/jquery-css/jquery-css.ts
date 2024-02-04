// jQuery.css: Implement a jQuery-like function that sets the style of a DOM element
// https://www.greatfrontend.com/questions/jquery-css

interface JQuery {
  css: (prop: string, value?: boolean | string | number) => JQuery | string | undefined;
}

export default function $(selector: string): JQuery | undefined {
  const element: HTMLElement | null = document.querySelector(selector);
  return {
    css: function (prop: string, value?: boolean | string | number): JQuery | string | undefined {
      if (value === undefined) {
        if (!element) return undefined;
        const style = element.style[prop as any];
        return style === '' ? undefined : style;
      }

      if (element) {
        element.style[prop as any] = String(value);
      }

      return this;
    },
  };
}
