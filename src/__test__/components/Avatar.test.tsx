import {it, describe, expect, vi, afterEach} from "vitest";
import {render, screen, waitFor} from "@testing-library/react";
import UiHeader from "@/components/ui/UiHeader";

describe("Avatar", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  })

  it("renders avatars", () => {
    render(<UiHeader />);
    const avatar = screen.getByLabelText("Avatar");
    screen.debug();
    expect(avatar.className).toMatch(/^MuiAvatar-/);
  });
});
