'use client'

import { useState } from 'react'
import { Check, ChevronRight, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Step {
  title: string
  description?: string
  content: React.ReactNode
  optional?: boolean
}

interface TutorialStepsProps {
  steps: Step[]
  title?: string
  className?: string
  allowSkip?: boolean
}

export function TutorialSteps({
  steps,
  title,
  className,
  allowSkip = true
}: TutorialStepsProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const markStepCompleted = (stepIndex: number) => {
    const newCompleted = new Set(completedSteps)
    newCompleted.add(stepIndex)
    setCompletedSteps(newCompleted)
  }

  const goToStep = (stepIndex: number) => {
    if (allowSkip || stepIndex <= Math.max(...completedSteps) + 1) {
      setCurrentStep(stepIndex)
    }
  }

  const nextStep = () => {
    markStepCompleted(currentStep)
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className={cn('space-y-6', className)}>
      {title && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-muted-foreground">
            Follow these steps to complete the setup
          </p>
        </div>
      )}

      {/* Progress indicator */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-2 min-w-0">
            <button
              onClick={() => goToStep(index)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors min-w-0',
                currentStep === index
                  ? 'bg-primary text-primary-foreground'
                  : completedSteps.has(index)
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : allowSkip || index <= Math.max(...completedSteps) + 1
                  ? 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                  : 'bg-muted/50 text-muted-foreground/50 cursor-not-allowed'
              )}
              disabled={!allowSkip && index > Math.max(...completedSteps) + 1}
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full text-xs">
                {completedSteps.has(index) ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Circle className="w-3 h-3" />
                )}
              </span>
              <span className="truncate">
                Step {index + 1}
                {step.optional && (
                  <span className="ml-1 text-xs opacity-75">(optional)</span>
                )}
              </span>
            </button>

            {index < steps.length - 1 && (
              <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            )}
          </div>
        ))}
      </div>

      {/* Current step content */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  {currentStep + 1}
                </span>
                <h3 className="text-lg font-semibold">
                  {steps[currentStep].title}
                </h3>
                {steps[currentStep].optional && (
                  <span className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground">
                    Optional
                  </span>
                )}
              </div>

              {steps[currentStep].description && (
                <p className="text-muted-foreground mb-4">
                  {steps[currentStep].description}
                </p>
              )}
            </div>

            <div>{steps[currentStep].content}</div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>

              <div className="flex items-center gap-2">
                {currentStep === steps.length - 1 ? (
                  <Button onClick={() => markStepCompleted(currentStep)}>
                    Complete
                  </Button>
                ) : (
                  <Button onClick={nextStep}>
                    {steps[currentStep].optional ? 'Skip' : 'Next Step'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress summary */}
      <div className="text-sm text-muted-foreground text-center">
        Progress: {completedSteps.size} of {steps.length} steps completed
        {completedSteps.size === steps.length && (
          <span className="text-green-600 ml-2">✓ All steps completed!</span>
        )}
      </div>
    </div>
  )
}

// Simple step component for inline use
interface StepProps {
  number: number
  title: string
  children: React.ReactNode
  className?: string
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <div className={cn('flex gap-4', className)}>
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-medium text-sm">
          {number}
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </div>
  )
}

// Step list for simpler use cases
interface StepListProps {
  steps: Array<{
    title: string
    content: React.ReactNode
  }>
  className?: string
}

export function StepList({ steps, className }: StepListProps) {
  return (
    <div className={cn('space-y-6', className)}>
      {steps.map((step, index) => (
        <Step
          key={index}
          number={index + 1}
          title={step.title}
        >
          {step.content}
        </Step>
      ))}
    </div>
  )
}