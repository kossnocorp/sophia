//go:build !exclude

// Package demo showcases a broad set of Go syntax features for theme highlighting.
package main

/*
Multi-line (block) comment
 - Contains *asterisks* and // line markers
 - Used to test comment highlighting
*/

//go:generate echo generating assets

import (
	// Standard library imports
	"context"
	"errors"
	"fmt"
	"math/cmplx"
	"os"
	"sync"
	"sync/atomic"
	"time"

	// Aliased & blank & dot imports
	alias "encoding/json"
	_ "image/png"
	. "strconv"
)

// ===== Constants & iota =====
const Pi = 3.1415926535
const (
	Answer  = 42
	Huge    = 1_000_000
	Binary  = 0b_1010_0110
	Octal   = 0o755
	Hex     = 0xFF_EC_DE_5E
	RuneA   = 'A'
	Complex = 1 + 2i

	// Enumerated bit flags using iota & shifting
	_ = iota
	FlagRead
	FlagWrite
	FlagExec
	FlagAll = (1 << iota) - 1 // demonstrate expression with iota
)

// Duration constants with iota based increments
const (
	_          = iota
	KB float64 = 1 << (10 * iota)
	MB
	GB
)

// ===== Generic Constraints =====
// Number demonstrates tilde (~) underlying type constraints & unions.
type Number interface {
	~int | ~int32 | ~int64 | ~float32 | ~float64
}

// Ordered is an example of comparable + union.
type Ordered interface {
	~int | ~string | ~float64
}

// ===== Types =====
type (
	// Struct with tags
	User struct {
		ID        int               `json:"id"`
		Name      string            `json:"name,omitempty"`
		Attrs     map[string]string `json:"attrs"`
		CreatedAt time.Time         `json:"created_at"`
	}

	// Generic struct type
	Box[T any] struct {
		Value T
	}

	// Interface with embedding
	Closer     interface{ Close() error }
	Reader     interface{ Read([]byte) (int, error) }
	ReadCloser interface {
		Reader
		Closer
	}

	// Function type
	Transform[T any] func(T) T
)

// Method on generic type
func (b Box[T]) Get() T   { return b.Value }
func (b *Box[T]) Set(v T) { b.Value = v }

// ===== Variables =====
var (
	// Untyped & typed variables
	globalCounter    atomic.Int64
	startupOnce      sync.Once
	ambientContext   = context.Background()
	compileTimeError error // zero value demonstration
	jsonMarshal      = alias.Marshal
	ParseIntAlias    = ParseInt // from dot-imported strconv
)

// Short var declarations & composite literals
var demoUser = User{ID: 1, Name: "Ada", Attrs: map[string]string{"lang": "go"}, CreatedAt: time.Now()}

// ===== Generic Functions =====
func MapSlice[T any, U comparable](in []T, f func(T) U) map[U]T {
	out := make(map[U]T, len(in))
	for _, v := range in {
		out[f(v)] = v
	}
	return out
}

// Reduce with constraint
func SumNumbers[T Number](vals ...T) (sum T) {
	for _, v := range vals {
		sum += v
	}
	return
}

// Constrained min using Ordered
func Min[T Ordered](a, b T) T {
	if b < a {
		return b
	}
	return a
}

// ===== Error Utilities =====
var (
	ErrNotFound = errors.New("not found")
	ErrTimeout  = fmt.Errorf("timeout after %v", 5*time.Second)
)

func wrapError(err error) error { return fmt.Errorf("wrap: %w", err) }

// ===== Concurrency & Channels =====
func asyncCompute[T Number](ctx context.Context, in <-chan T) (<-chan T, <-chan error) {
	out := make(chan T)
	errC := make(chan error, 1)
	go func() {
		defer close(out)
		defer close(errC)
		for {
			select {
			case <-ctx.Done():
				errC <- ctx.Err()
				return
			case v, ok := <-in:
				if !ok {
					return
				}
				out <- v * v // simple operation
			}
		}
	}()
	return out, errC
}

// ===== Control Flow =====
func controlExamples(x int, anyVal any) (int, error) {
	// if with short statement
	if y := x * 2; y > 10 {
		x = y
	}

	// for - classic
	for i := 0; i < 3; i++ {
		x += i
	}

	// for - range over slice
	for _, r := range []rune("héllo") {
		_ = r
	}

	// for - infinite with break / continue & label
Outer:
	for {
		for j := 0; j < 2; j++ {
			if j == 1 {
				break Outer
			}
			continue
		}
	}

	// switch value
	switch x {
	case 0, 1, 2:
		fallthrough
	case 3:
		x += 3
	default:
		x++
	}

	// type switch
	switch v := anyVal.(type) {
	case nil:
		return x, nil
	case int:
		x += v
	case fmt.Stringer:
		_ = v.String()
	default:
		// no-op
	}

	return x, nil
}

// ===== Defer / Panic / Recover =====
func safeExecute(fn func()) (recovered any) {
	defer func() { recovered = recover() }()
	defer fmt.Println("cleanup via defer")
	fn()
	return
}

// ===== Strings, Runes, Slices, Maps =====
func literals() {
	raw := `raw string with \n not interpreted and a "quote"`
	esc := "escaped string with newline\n and tab\t"
	bytes := []byte(esc)
	runes := []rune("𝒢o✓")
	slice := []int{1, 2, 3}
	array := [3]string{"a", "b", "c"}
	matrix := [][]int{{1, 2}, {3, 4}}
	m := map[string]int{"one": 1, "two": 2}
	_ = []any{raw, esc, bytes, runes, slice, array, matrix, m}
}

// ===== Initialization =====
func init() {
	startupOnce.Do(func() { fmt.Println("init once") })
}

// ===== Main Entrypoint =====
func main() {
	fmt.Println("Pi", Pi, "Huge", Huge, "Complex magnitude", cmplx.Abs(Complex))

	chIn := make(chan int)
	go func() {
		for i := 1; i <= 3; i++ {
			chIn <- i
		}
		close(chIn)
	}()

	ctx, cancel := context.WithTimeout(ambientContext, 50*time.Millisecond)
	defer cancel()

	chOut, errC := asyncCompute[int](ctx, chIn)
	for {
		select {
		case v, ok := <-chOut:
			if !ok {
				chOut = nil
			}
			fmt.Println("square", v)
		case err, ok := <-errC:
			if ok && err != nil && !errors.Is(err, context.DeadlineExceeded) {
				fmt.Println("error:", err)
			}
			errC = nil
		}
		if chOut == nil && errC == nil {
			break
		}
	}

	fmt.Println("min", Min(3, 2), "sum", SumNumbers(1, 2, 3))

	res := safeExecute(func() { panic("boom") })
	fmt.Println("recovered:", res)

	// JSON marshal example
	data, err := jsonMarshal(demoUser)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
	}
	fmt.Println(string(data))

	_ = MapSlice([]string{"a", "bb"}, func(s string) int { return len(s) })
	_, _ = controlExamples(5, demoUser.Name)
}
