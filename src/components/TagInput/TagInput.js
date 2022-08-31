import React, { forwardRef, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import propTypes from '@styled-system/prop-types'
import css from '@styled-system/css'
import { Typography, Box, Flex } from '@etvas/etvaskit'

import { default as containerVariants } from './variants.container'
import { default as sublabelVariants } from './variants.sublabel'
import { default as inputVariants } from './variants.input'
import { tagShape } from './shape'
import { Tag } from './Tag'

export const TagInput = forwardRef(
  (
    {
      label,
      placeholder,
      loading,
      required,
      disabled,
      readOnly,
      error,
      warning,
      valid,
      variant,
      id,
      name,
      value,
      onChange,
      autoComplete,
      autoFocus,
      onInputClick,
      importHandler,
      exportHandler,
      noPreserveSpace,
      forceAddTagKeys,
      maxTags,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('')

    const tags = useMemo(() => importHandler(value), [value, importHandler])

    const currentVariant = useMemo(() => {
      if (disabled || loading) return 'disabled'
      else if (error) return 'error'
      else if (warning) return 'warning'
      else if (valid) return 'valid'
      return variant
    }, [loading, disabled, error, warning, valid, variant])

    const handleTagRemove = index => () => {
      const newTags = [...tags]
      newTags.splice(index, 1)

      onChange(exportHandler(newTags))
    }

    const handleTagAdd = () => {
      onChange(exportHandler([...tags, inputValue.trim()]))
    }

    const handleInputChange = useCallback(
      event => setInputValue(event.target.value),
      []
    )

    const handleInputKeyPress = event => {
      if (forceAddTagKeys.includes(event.key)) {
        event.preventDefault()
      }

      if (
        [...forceAddTagKeys, 'Enter'].includes(event.key) &&
        inputValue.trim()
      ) {
        handleTagAdd()
        setInputValue('')
      }
    }

    const handleInputKeyUp = event => {
      if (event.key === 'Backspace' && !inputValue) {
        handleTagRemove(-1)()
      }
    }

    const handleInputBlur = () => {
      if (inputValue.trim()) {
        handleTagAdd()
      }

      setInputValue('')
    }

    return (
      <Container flexDirection='column' width={1} {...rest}>
        {!!label && (
          <Box mb={1}>
            <Typography
              as='label'
              htmlFor={id}
              variant='base12Bold'
              color='baseMetal'
              width='fit-content'>
              {label}
            </Typography>
          </Box>
        )}

        <Flex alignItems='center' position='relative' width={1}>
          <StyledInputContainer variant={currentVariant}>
            {tags.map((tag, index) => (
              <Tag
                value={tag}
                key={tag}
                disabled={disabled}
                onRemove={handleTagRemove(index)}
                my={1}
              />
            ))}
            {!disabled && maxTags >= tags.length && (
              <StyledInput
                variant={currentVariant}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                ariaDisabled={readOnly || disabled}
                disabled={disabled}
                error={error}
                hasLabel={label}
                id={id}
                name={name}
                onChange={handleInputChange}
                placeholder={readOnly ? '' : placeholder}
                readOnly={readOnly}
                ref={ref}
                required={required}
                type='text'
                value={inputValue}
                onClick={onInputClick}
                onKeyPress={handleInputKeyPress}
                onKeyUp={handleInputKeyUp}
                onBlur={handleInputBlur}
              />
            )}
          </StyledInputContainer>
        </Flex>

        <SubLabel
          noPreserveSpace={noPreserveSpace}
          variant={currentVariant}
          mt={1}>
          {error}
        </SubLabel>
      </Container>
    )
  }
)

const Container = styled(Flex)`
  user-select: none;
  overflow: hidden;
  &:focus-within {
    label {
      color: ${themeGet('colors.textInputFocused')};
    }
  }
`

const SubLabel = styled(Typography)`
  min-height: ${({ noPreserveSpace }) => (noPreserveSpace ? 0 : '16px')};
  ${variant({ variants: sublabelVariants })}
`

const StyledInputContainer = styled.div(
  variant({ variants: containerVariants }),
  css({
    display: 'flex',
    flexWrap: 'wrap',
    py: 1
  })
)

const StyledInput = styled.input(variant({ variants: inputVariants }))

const defaultImportHandler = value => value
const defaultExportHandler = value => value

TagInput.propTypes = {
  ...propTypes.input,
  ...tagShape,
  loading: PropTypes.bool,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  warning: PropTypes.bool,
  valid: PropTypes.bool,
  variant: PropTypes.string,
  autoComplete: PropTypes.string,
  autoFocus: PropTypes.bool,
  onInputClick: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  importHandler: PropTypes.func,
  exportHandler: PropTypes.func,
  noPreserveSpace: PropTypes.bool,
  maxTags: PropTypes.number,
  forceAddTagKeys: PropTypes.arrayOf(PropTypes.string)
}

TagInput.defaultProps = {
  autoFocus: false,
  minHeight: 40,
  noBottomSpace: false,
  readOnly: false,
  value: '',
  variant: 'default',
  importHandler: defaultImportHandler,
  exportHandler: defaultExportHandler,
  forceAddTagKeys: [],
  maxTags: 20
}
