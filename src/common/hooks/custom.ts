/* eslint-disable import/prefer-default-export */
import { MutableRefObject, useEffect, useRef } from 'react'
import { isEqual } from 'lodash'

/**
 * a type-safe version of the `usePrevious` hook described here:
 * @see {@link https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state}
 */
export function usePrevious<T>(
  value: T
): MutableRefObject<T | undefined>['current'] {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export function useShallowCompare<T>(val: T): boolean {
  const prevVal = usePrevious<T>(val)
  return prevVal !== val
}

export function useDeepCompare<T>(val: T): boolean {
  const prevVal = usePrevious<T>(val)
  return !isEqual(prevVal, val)
}

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
