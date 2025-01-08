"use client";
import { useEffect, useRef, useState, RefObject } from 'react';

export function useInView<T extends HTMLElement>(options: IntersectionObserverInit = {}): [RefObject<T | null>, boolean] {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
                if (entry.isIntersecting) {
                    observer.unobserve(entry.target);
                }
            },
            options
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options]);

    return [ref, isInView];
} 