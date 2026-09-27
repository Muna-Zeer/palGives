'use client';

import React, { useState } from 'react';
import { FiSearch, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function InPageSearch() {
 const [isOpen, setIsOpen] = useState(false);
 const [query,setQuery] = useState('');
 const[matches,setMatches] = useState<HTMLElement[]>([]);
const [matchCount,setMatchCount] = useState(0);
const [currentIndex,setCurrentIndex] = useState(0);
  
   const clearHighlights= () =>{
           const highlightedElements = document.querySelectorAll('.search-highlight');
                   highlightedElements.forEach((el)=>{
                    const parent =el.parentNode;
                    if(parent){
                        parent.replaceChild(document.createTextNode(el.textContent||''),el);
                        parent.normalize();
                    }
                   });
                   setMatches([]);
                   setMatchCount(0);
                   setCurrentIndex(0);
        }
 



  const handleSearch = (searchTerm: string) => {
    clearHighlights();
    if (!searchTerm.trim()) return;

    const term = searchTerm.toLowerCase();
    const body = document.querySelector('main') || document.body;
    const foundElements: HTMLElement[] = [];

    // Walk through all text nodes in the page body
    const walkTextNodes = (node: Node) => {
      if (
        node.nodeType === Node.TEXT_NODE &&
        node.textContent &&
        node.textContent.trim().length > 0
      ) {
        const text = node.textContent;
        const lowerText = text.toLowerCase();
        
        if (lowerText.includes(term)) {
          const parent = node.parentNode as HTMLElement;
          // Avoid re-highlighting existing search elements, scripts, or inputs
          if (
            parent &&
            !parent.closest('.search-container') &&
            parent.tagName !== 'SCRIPT' &&
            parent.tagName !== 'STYLE' &&
            parent.tagName !== 'INPUT'
          ) {
            const regex = new RegExp(`(${searchTerm.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')})`, 'gi');
            const fragments = text.split(regex);

            const spanWrapper = document.createElement('span');
            fragments.forEach((part) => {
              if (part.toLowerCase() === term) {
                const mark = document.createElement('mark');
                mark.className = 'search-highlight bg-amber-300 text-black px-0.5 rounded shadow-sm font-semibold transition-all duration-200';
                mark.textContent = part;
                spanWrapper.appendChild(mark);
                foundElements.push(mark);
              } else {
                spanWrapper.appendChild(document.createTextNode(part));
              }
            });

            parent.replaceChild(spanWrapper, node);
          }
        }
      } else {
        node.childNodes.forEach((child) => walkTextNodes(child));
      }
    };

    walkTextNodes(body);

    setMatches(foundElements);
    setMatchCount(foundElements.length);

    if (foundElements.length > 0) {
      setCurrentIndex(0);
      scrollToMatch(foundElements[0]);
    }
  };

  const scrollToMatch = (element: HTMLElement) => {
    // Remove active highlight from all
    document.querySelectorAll('.search-highlight').forEach((el) => {
      el.classList.remove('ring-2', 'ring-amber-600', 'bg-amber-400');
      el.classList.add('bg-amber-300');
    });

    // Highlight current active selection
    element.classList.remove('bg-amber-300');
    element.classList.add('bg-amber-400', 'ring-2', 'ring-amber-600');

    // Smooth scroll down to the element
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const handleNext = () => {
    if (matches.length === 0) return;
    const nextIdx = (currentIndex + 1) % matches.length;
    setCurrentIndex(nextIdx);
    scrollToMatch(matches[nextIdx]);
  };

  const handlePrev = () => {
    if (matches.length === 0) return;
    const prevIdx = (currentIndex - 1 + matches.length) % matches.length;
    setCurrentIndex(prevIdx);
    scrollToMatch(matches[prevIdx]);
  };

  const handleClose = () => {
    clearHighlights();
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="relative search-container">
      {/* Navbar Search Icon Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (isOpen) clearHighlights();
        }}
        className="p-2 text-slate-700 hover:text-amber-500 transition-colors focus:outline-none"
        aria-label="Toggle search bar"
      >
        <FiSearch className="w-5 h-5" />
      </button>

      {/* Popover In-Page Search Box */}
      {isOpen && (
        <div className="absolute right-0 top-12 z-50 flex items-center bg-white border border-gray-200 rounded-lg shadow-xl p-2 gap-2 w-80">
          <div className="flex-1 flex items-center bg-gray-50 rounded px-2 py-1">
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                handleSearch(e.target.value);
              }}
              placeholder="Find on page..."
              className="w-full text-sm text-gray-800 bg-transparent focus:outline-none"
              autoFocus
            />
            {query && (
              <span className="text-xs text-gray-400 whitespace-nowrap ml-1">
                {matchCount > 0 ? `${currentIndex + 1}/${matchCount}` : '0 results'}
              </span>
            )}
          </div>

          {/* Previous / Next Controls */}
          {matchCount > 0 && (
            <div className="flex items-center gap-1 text-gray-600">
              <button
                type="button"
                onClick={handlePrev}
                className="p-1 hover:bg-gray-100 rounded"
                title="Previous match"
              >
                <FiChevronUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-1 hover:bg-gray-100 rounded"
                title="Next match"
              >
                <FiChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}