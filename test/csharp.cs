using System.Collections.Generic;
using System;
using System.Diagnostics;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Windows.System;
using Windows.UI.Input.Preview.Injection;
using System.Linq;
using System.Text;

namespace Hello
{
  internal class World
  {
    public struct Say
    {
      public string hello;
      public string world;
    }

    public enum LoremIpsum
    {
      Lorem,
      Ipsum,
      Dolor,
      Sit
    }

    #region DLL imports
    [DllImport("user32.dll", CharSet = CharSet.Auto, SetLastError = true)]
    private static extern IntPtr SetWindowsHookEx(
        int idHook,
        LowLevelKeyboardProc lpfn,
        IntPtr hMod,
        uint dwThreadId
    );

    #region Constants
    private const int INT_CONST = 13;
    private const int BIN_CONST = 0x0100;
    #endregion

    LoremIpsum[] lorem = { LoremIpsum.Lorem };

    private Say say = new Say
    {
      hello = "Hello",
      world = "World"
    };

    private IntPtr intPtr = IntPtr.Zero;

    private bool nah = false;

    public Keyboard()
    {
      if (intPtr == IntPtr.Zero)
      {
        intPtr = SetWindowsHookEx(INT_CONST, LowLevelKeyboardProc, IntPtr.Zero, 0);
      }

      var i = 0;
      while (true)
      {
        if (i == 10)
        {
          break;
        }
        i++;
      }

      Hello();
    }

    ~Keyboard()
    {
      Bye();
    }

    private void Hello()
    {
      Debug.WriteLine("Hello");
    }

    public int Bye()
    {
      Debug.WriteLine("Bye");
      return 123;
    }
  }
}
