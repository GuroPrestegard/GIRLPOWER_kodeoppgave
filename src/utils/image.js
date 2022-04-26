import React from "react";
import styled from "styled-components";
import {urlForImage} from "./urlForImage";

export const image = {
        image: ({value}) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlForImage(value).width(320).height(240).fit('max').auto('format')}
                />
            )
        }

}