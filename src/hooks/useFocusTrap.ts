import type { MutableRefObject } from "react";
import { useCallback, useEffect } from "react";

const getIsHTMLElementVisible = (item: HTMLElement): boolean => {
  const styles = window.getComputedStyle(item);

  return !(
    styles.display === "none" ||
    styles.visibility === "hidden" ||
    styles.opacity === "0"
  );
};

const allFocusableElementsSelectors =
  'button:not([tabindex="-1"]), [href]:not([tabindex="-1"]), input:not([tabindex="-1"]), select:not([tabindex="-1"]), textarea:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])';

export const useFocusTrap = (
  ref: MutableRefObject<HTMLElement | null>,
  enabled: boolean,
  focusFirstElement?: boolean
) => {
  const handleTabKey = useCallback(
    (evt: KeyboardEvent) => {
      if (!ref.current || evt.key !== "Tab" || !enabled) return;

      const focusableElements = Array.from(
        ref.current.querySelectorAll<HTMLElement>(allFocusableElementsSelectors)
      ).filter(getIsHTMLElementVisible);

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const isActiveElementOutsideOfRef = !focusableElements.some(
        (element) => element === document.activeElement
      );

      if (
        evt.shiftKey &&
        (isActiveElementOutsideOfRef || document.activeElement === firstElement)
      ) {
        lastElement?.focus();
        evt.preventDefault();
      }

      if (
        !evt.shiftKey &&
        (isActiveElementOutsideOfRef || document.activeElement === lastElement)
      ) {
        firstElement?.focus();
        evt.preventDefault();
      }
    },
    [enabled]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleTabKey);

    return () => document.removeEventListener("keydown", handleTabKey);
  }, [handleTabKey]);

  useEffect(() => {
    if (enabled) {
      const focused = document.activeElement as HTMLElement;

      Array.from(
        ref.current?.querySelectorAll<HTMLElement>(
          allFocusableElementsSelectors
        ) || []
      )
        .filter(
          (item) =>
            getIsHTMLElementVisible(item) && !("modalToggle" in item.dataset)
        )?.[0]
        ?.focus();

      return () => focused?.focus();
    }
  }, [enabled]);

  useEffect(() => {
    if (!enabled || !ref.current || !focusFirstElement) return;

    const focusableElements = ref.current.querySelectorAll(
      allFocusableElementsSelectors
    );

    for (const item of focusableElements) {
      const isVisible = getIsHTMLElementVisible(item as HTMLElement);

      if (!isVisible) continue;

      (item as HTMLElement).focus();

      return;
    }
  }, [enabled]);
};
