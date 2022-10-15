import {create} from "react-test-renderer";
import React from "react";
import ProfileStatus from "./ProfileStatus";


describe("ProfileStatus Component", () => {
    test("status from should be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
    });
    test("after creation span should be displayed ", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation input should be displayed text ", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        expect(() => {
            instance.findByType("input");
        }).toThrow();
    });
    test("span should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick();
        const input = instance.findByType("input");
        expect(input.props.value).toBe('SUBSCRIBE TO BASIC');
    });
    test("callback should be called ", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactiveEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});