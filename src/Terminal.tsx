import { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { executeCommand } from './commands';
import { TerminalLine } from './types';
import BlinkingText from './BlinkingText';

const bootSequence = [
  { content: 'BIOS v2.3.1 1987', delay: 200, glitch: false },
  { content: 'POST MEMORY TEST...', delay: 100, glitch: false },
  { content: '64K OK', delay: 40, glitch: false },
  { content: '128K OK', delay: 40, glitch: false },
  { content: '256K OK', delay: 40, glitch: false },
  { content: '512K O#@', delay: 450, glitch: false },
  { content: '512K OK', delay: 40, glitch: false },
  { content: '640K OK', delay: 40, glitch: false },
  { content: '', delay: 400 },
  { content: 'LOADING BOOT SECTOR...', delay: 600, glitch: false },
  { content: 'ERR: BAD SECTOR', delay: 150, glitch: false },
  { content: 'RETRY...', delay: 800, glitch: false },
  { content: 'BOOT OK', delay: 300, glitch: false },
  { content: '', delay: 600 },
  { content: 'S#DO', delay: 180, glitch: false },
  { content: 'S U D O', delay: 900, glitch: false },
  { content: '', delay: 500 },
  { content: 'loading modules:', delay: 250, glitch: false },
  { content: '  [OK]   disk.sys', delay: 60, glitch: false },
  { content: '  [OK]   video.sys', delay: 60, glitch: false },
  { content: '  [OK]   keyboard.sys', delay: 60, glitch: false },
  { content: '  [WARN] network.sys - deprecated', delay: 100, glitch: false },
  { content: '  [??]   unknown.sys', delay: 400, glitch: false },
  { content: '', delay: 800 },
  { content: 'cpu: 80386DX 33MHz', delay: 100, glitch: false },
  { content: 'memory: 640KB', delay: 100, glitch: false },
  { content: 'cmos: battery low', delay: 150, glitch: false },
  { content: 'rtc: 1999-12-31 23:59', delay: 200, glitch: false },
  { content: '', delay: 700 },
  { content: 'permission model: legacy', delay: 150, glitch: false },
  { content: '', delay: 600 },
  { content: 'system: active', delay: 200, glitch: false },
  { content: 'user: unknown', delay: 200, glitch: false },
  { content: '', delay: 900 },
  { content: 'ready.', delay: 500, glitch: false },
];

export default function Terminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [bootComplete, setBootComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: number;

    const addBootLine = () => {
      if (currentIndex < bootSequence.length) {
        const bootLine = bootSequence[currentIndex];
        setLines((prev) => [
          ...prev,
          {
            type: 'system',
            content: bootLine.content,
            timestamp: Date.now(),
            glitch: bootLine.glitch,
          },
        ]);

        currentIndex++;
        timeoutId = setTimeout(addBootLine, bootLine.delay);
      } else {
        setBootComplete(true);
        setLines([]);
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      }
    };

    timeoutId = setTimeout(addBootLine, 200);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();

    setLines((prev) => [
      ...prev,
      { type: 'input', content: `> ${trimmedCmd}`, timestamp: Date.now() },
    ]);

    if (trimmedCmd.toLowerCase() === 'clear') {
      setTimeout(() => {
        setLines([]);
        setInput('');
      }, 100);
      return;
    }

    const response = executeCommand(trimmedCmd);

    setTimeout(() => {
      const newLines: TerminalLine[] = response.output.map((line) => ({
        type: response.type || 'output',
        content: line,
        timestamp: Date.now(),
        glitch: response.glitch,
      }));

      setLines((prev) => [...prev, ...newLines]);
    }, Math.random() * 100 + 50);

    if (trimmedCmd) {
      setCommandHistory((prev) => [...prev, trimmedCmd]);
    }
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (input.trim()) {
        handleCommand(input);
      } else {
        setLines((prev) => [
          ...prev,
          { type: 'input', content: '>', timestamp: Date.now() },
        ]);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      handleCommand('clear');
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="terminal-container"
      onClick={handleTerminalClick}
    >
      <div className="crt-effect" />
      <div className="dead-pixels" />
      <div className="static-noise" />
      <div className="launch-time">
        $sudo official launch: 10 pm est, 12-22-25
      </div>
      <div className="system-info">
        © 2025 $sudo. All rights reserved
      </div>

      {!bootComplete ? (
        <div className="boot-screen">
          <div className="boot-content">
            {lines.map((line, index) => (
              <div
                key={`${line.timestamp}-${index}`}
                className={`terminal-line ${line.type} ${line.glitch ? 'glitch' : ''}`}
              >
                <BlinkingText text={line.content} />
              </div>
            ))}
          </div>
          <a href="https://x.com/SudoTechCoin" target="_blank" rel="noopener noreferrer" className="boot-x-link">
            follow sudo @sudotechcoin
          </a>
        </div>
      ) : (
        <div className="terminal-frame">
          <div className="terminal-header">
            <div className="header-top">
              <div className="header-title">S U D O</div>
              <a href="https://x.com/SudoTechCoin" target="_blank" rel="noopener noreferrer" className="header-social">
                <span className="x-logo">𝕏</span>
              </a>
            </div>
            <div className="header-divider" />
            <div className="header-status">system: active</div>
            <div className="header-status">access: unknown</div>
          </div>

          <div ref={terminalRef} className="terminal-content">
            <div className="terminal-lines">
              {lines.map((line, index) => (
                <div
                  key={`${line.timestamp}-${index}`}
                  className={`terminal-line ${line.type} ${
                    line.glitch ? 'glitch' : ''
                  }`}
                >
                  <BlinkingText text={line.content} />
                </div>
              ))}
            </div>

            <div className="terminal-input-line">
              <span className="prompt">sudo@unknown:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                spellCheck={false}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
              <span className="cursor">_</span>
            </div>
          </div>

          <div className="terminal-footer">
            <div className="footer-line">type "help"</div>
            <div className="footer-line">sudo :: no root access</div>
          </div>
        </div>
      )}
    </div>
  );
}
