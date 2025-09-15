import { useEffect, useCallback } from 'react'

export interface KeyboardNavigationOptions {
  onArrowUp?: () => void
  onArrowDown?: () => void
  onEnter?: () => void
  onSpace?: () => void
  onEscape?: () => void
  onHome?: () => void
  onEnd?: () => void
  disabled?: boolean
}

export const useKeyboardNavigation = ({
  onArrowUp,
  onArrowDown,
  onEnter,
  onSpace,
  onEscape,
  onHome,
  onEnd,
  disabled = false
}: KeyboardNavigationOptions) => {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        onArrowUp?.()
        break
      case 'ArrowDown':
        event.preventDefault()
        onArrowDown?.()
        break
      case 'Enter':
        event.preventDefault()
        onEnter?.()
        break
      case ' ':
        event.preventDefault()
        onSpace?.()
        break
      case 'Escape':
        event.preventDefault()
        onEscape?.()
        break
      case 'Home':
        event.preventDefault()
        onHome?.()
        break
      case 'End':
        event.preventDefault()
        onEnd?.()
        break
    }
  }, [onArrowUp, onArrowDown, onEnter, onSpace, onEscape, onHome, onEnd, disabled])

  useEffect(() => {
    if (disabled) return

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown, disabled])

  return { handleKeyDown }
}

// Hook pour gérer le focus dans une liste d'éléments
export const useFocusManagement = (itemsCount: number, loop: boolean = true) => {
  const focusItem = useCallback((index: number) => {
    const items = document.querySelectorAll('[data-focus-item]')
    const targetItem = items[index] as HTMLElement
    if (targetItem) {
      targetItem.focus()
    }
  }, [])

  const moveFocus = useCallback((currentIndex: number, direction: 'up' | 'down') => {
    let nextIndex = currentIndex

    if (direction === 'up') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : (loop ? itemsCount - 1 : 0)
    } else {
      nextIndex = currentIndex < itemsCount - 1 ? currentIndex + 1 : (loop ? 0 : itemsCount - 1)
    }

    focusItem(nextIndex)
    return nextIndex
  }, [itemsCount, loop, focusItem])

  const focusFirst = useCallback(() => {
    focusItem(0)
    return 0
  }, [focusItem])

  const focusLast = useCallback(() => {
    focusItem(itemsCount - 1)
    return itemsCount - 1
  }, [focusItem, itemsCount])

  return {
    focusItem,
    moveFocus,
    focusFirst,
    focusLast
  }
}

export default useKeyboardNavigation